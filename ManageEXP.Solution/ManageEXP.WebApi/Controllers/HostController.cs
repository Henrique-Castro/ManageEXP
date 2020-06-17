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
    public class HostController : ControllerBase
    {
        readonly IZabbixService _zabbixService;

        public HostController(IZabbixService service)
        {
            _zabbixService = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetHost([FromBody]dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("host.get", parameters);

            return Ok(response.result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateHost([FromBody]dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("host.create", parameters);

            return Ok(response.result);
        }
        
        [HttpPut]
        public async Task<IActionResult> UpdateHost([FromBody]dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("host.update", parameters);

            return Ok(response.result);
        }
        
        [HttpDelete]
        public async Task<IActionResult> DeleteHost([FromBody]dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("host.delete", parameters);

            return Ok(response.result);
        }
    }
}