using ManageEXP.Domain.AppSettings;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.ValueObjects;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ManageEXP.Domain.Services
{
    public class ItemService : IItemService
    {
        readonly ZabbixSettings _settings;
        static readonly HttpClient _httpClient = new HttpClient();
        public ItemService(IOptions<ZabbixSettings> configuration)
        {
            _settings = configuration.Value;
            _settings.Url = new Uri(_settings.Url).ToString();
        }

        public async Task<object> GetItem(ZabbixRequest request)
        {
            var body = JsonConvert.SerializeObject(request);

            var contentString = new StringContent(
                 body, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync(_settings.Url, contentString);

            var content = await response.Content.ReadAsStringAsync();

            var result = JsonConvert.DeserializeObject<ZabbixResponse<object[]>>(content);

            return result;
        }
    }
}
