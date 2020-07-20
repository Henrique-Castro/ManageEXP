using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.ValueObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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

        [HttpPost("Get")]
        public async Task<IActionResult> GetHost([FromBody]dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("host.get", parameters);

            return Ok(response.result);
        }



        // Parameters:
        //   
        //     É importante que nos campos groupid e templateid da requisição sejam passados
        //     valores que existem no zabbix.
        //
        [HttpPost("Create")]
        public async Task<IActionResult> CreateHost([FromBody]dynamic parameters)
        {
            //ZabbixResponse templateResponse = await _zabbixService.GetZabbixResponseAsync("template.get", JsonConvert.SerializeObject(new { output = "extend" }));
            //ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("usermacro.get", JsonConvert.SerializeObject(new { output = "extend" }));

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