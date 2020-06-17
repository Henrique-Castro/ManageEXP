using ManageEXP.Domain.AppSettings;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.ValueObjects;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ManageEXP.Domain.Services
{
    public class AuthService : IAuthService
    {
        readonly IZabbixService _zabbixService;
        readonly ZabbixSettings _settings;
        static readonly HttpClient _httpClient = new HttpClient();

        public AuthService(IOptions<ZabbixSettings> configuration, IZabbixService zabbixService)
        {
            _settings = configuration.Value;
            _settings.Url = new Uri(_settings.Url).ToString();

            _zabbixService = zabbixService;
        }

        public async Task<string> LoginAsync(dynamic parameters)
        {
            ZabbixSettings.Token = response.result;

            return ZabbixSettings.Token;
        }
    }
}
