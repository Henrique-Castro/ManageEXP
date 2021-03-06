﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ManageEXP.Domain.AppSettings;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.ValueObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManageEXP.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        readonly IZabbixService _zabbixService;

        public AuthController(IZabbixService service)
        {
            _zabbixService = service;
        }

        [HttpPost]
        public async Task<IActionResult> LoginAsync([FromBody] dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("user.login", parameters);

            ZabbixSettings.Token = response?.result;

            return Ok(response.result);
        }

        [HttpPost("Logout")]
        public async Task<IActionResult> LogoutAsync()
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("user.logout", null);

            if (response.error == null)
            {
                ZabbixSettings.Token = string.Empty;
                ZabbixSettings.Url = string.Empty;
            }

            return Ok(response.result);
        }
    }
}