using ManageEXP.Domain.AppSettings;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.ValueObjects;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ManageEXP.Domain.Services
{
    public class ZabbixService : IZabbixService
    {
        readonly ZabbixSettings _settings;
        static readonly HttpClient _httpClient = new HttpClient();

        public ZabbixService(IOptions<ZabbixSettings> configuration)
        {
            _settings = configuration.Value;
        }

        public async Task<ZabbixResponse> GetZabbixResponseAsync(string method, dynamic parameters)
        {
            ZabbixRequest request = new ZabbixRequest(ZabbixSettings.Version, method, parameters, 1, ZabbixSettings.Token);

            string jsonResponse = await SendRequestAsync(request);

            var response = JsonConvert.DeserializeObject<ZabbixResponse>(jsonResponse);                   
            
            return response;
        }

        public async Task<bool> SetZabbixAddress(string address)
        {
            ZabbixRequest request = new ZabbixRequest(ZabbixSettings.Version, "apiinfo.version", null, 1, null);

            var body = new StringContent(JsonConvert.SerializeObject(request), Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync(address, body);

            var content = await response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject<ZabbixResponse>(content);

            if (result.error == null)
            {
                ZabbixSettings.Url = address;
                return true;
            }
            else
            {
                return false;
            }
        }

        private async Task<string> SendRequestAsync(ZabbixRequest request)
        {
            var body = new StringContent(JsonConvert.SerializeObject(request), Encoding.UTF8, "application/json");

            var uri = new Uri(ZabbixSettings.Url);

            var response = await _httpClient.PostAsync(uri, body);

            var content = await response.Content.ReadAsStringAsync();

            return content;
        }
    }
}
