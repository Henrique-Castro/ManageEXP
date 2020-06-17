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
            _settings.Url = new Uri(_settings.Url).ToString();
        }

        public async Task<ZabbixResponse> GetZabbixResponseAsync(string method, dynamic parameters)
        {
            ZabbixRequest request = new ZabbixRequest(_settings.Version, method, parameters, 1, ZabbixSettings.Token);

            string jsonResponse = await SendRequestAsync(request);

            var response = JsonConvert.DeserializeObject<ZabbixResponse>(jsonResponse);

            if (method == "user.login" && response.error == null)
            {
                ZabbixSettings.Token = response.result;
            }
            if(method == "user.logout" && response.error == null)
            {
                ZabbixSettings.Token = string.Empty;
            }

            return response;
        }

        private async Task<string> SendRequestAsync(ZabbixRequest request)
        {
            var body = new StringContent(JsonConvert.SerializeObject(request), Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync(_settings.Url, body);

            var content = await response.Content.ReadAsStringAsync();

            return content;
        }
    }
}
