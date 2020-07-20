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
    public class ApplicationController : ControllerBase
    {
        readonly IZabbixService _zabbixService;

        public ApplicationController(IZabbixService service)
        {
            _zabbixService = service;
        }

        [HttpPost("Get")]
        public async Task<IActionResult> GetApplication([FromBody] dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("application.get", parameters);

            return Ok(response.result);
        }
    }
}
