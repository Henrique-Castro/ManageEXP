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
    public class ZabbixController : ControllerBase
    {
        readonly IZabbixService _zabbixService;

        public ZabbixController(IZabbixService service)
        {
            _zabbixService = service;
        }

        [HttpPost]
        public async Task<IActionResult> LoginAsync([FromBody]dynamic parameters)
        {
            var result = await _zabbixService.LoginAsync(parameters);

            return Ok(result);
        }
    }
}