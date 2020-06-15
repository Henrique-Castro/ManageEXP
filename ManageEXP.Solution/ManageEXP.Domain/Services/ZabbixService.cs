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

        string _user;
        string _auth;

        public ZabbixService(IOptions<ZabbixSettings> configuration)
        {
            _settings = configuration.Value;
            _settings.Url = new Uri(_settings.Url).ToString();
        }

        public async Task<string> LoginAsync(dynamic parameters)
        {
            var result = await GetZabbixResponseAsync("user.login", parameters);

            _auth = result;

            return _auth;
        }

        public async Task<object> GetZabbixResponseAsync(string method, object parameters)
        {
            var deserializedParams = JsonConvert.DeserializeObject<ExpandoObject>(parameters.ToString());

            var request = new ZabbixRequest(_settings.Version, method, deserializedParams, 1, _auth);

            var body = new StringContent(JsonConvert.SerializeObject(request), Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync(_settings.Url, body);

            var content = await response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject<ZabbixResponse<string>>(content);

            return result.result;
        }
    }
}
