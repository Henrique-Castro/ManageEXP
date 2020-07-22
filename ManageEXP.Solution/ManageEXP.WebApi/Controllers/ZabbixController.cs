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
        public async Task<IActionResult> SetZabbixAddress([FromBody] string address)
        {
            try
            {
                var result = await _zabbixService.SetZabbixAddress(address);
                if (result)
                {
                    return Ok("Endereço inserido com sucesso.");
                }
                else
                {
                    return BadRequest("Falha na inserção do endereço. Verifique se ele está online.");
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Falha na inserção do endereço. Verifique se ele está online.");
            }

        }
    }
}