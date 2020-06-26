using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.Domain.Services;
using ManageEXP.Domain.ValueObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManageEXP.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        readonly IZabbixService _zabbixService;

        public ItemController(IZabbixService service)
        {
            _zabbixService = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetItem([FromBody] dynamic parameters)
        {
            ZabbixResponse response = await _zabbixService.GetZabbixResponseAsync("item.get", parameters);

            return Ok(response.result);
        }
    }
}