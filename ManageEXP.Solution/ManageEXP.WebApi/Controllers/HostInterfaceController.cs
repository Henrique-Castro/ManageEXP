using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.ValueObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManageEXP.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HostInterfaceController : ControllerBase
    {
        readonly IZabbixService _zabbixService;

        public HostInterfaceController(IZabbixService service)
        {
            _zabbixService = service;
        }

        [HttpPost("Get")]
        public async Task<IActionResult> GetHostInterface(dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("hostinterface.get", parameters);

            return Ok(response.result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> CreateHostInterface(dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("hostinterface.create", parameters);

            return Ok(response.result);
        }
    }
}