using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ManageEXP.Domain.Interfaces.Services;
using ManageEXP.WebApi.Models;

namespace ManageEXP.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        readonly IClientService _clientService;

        public ClientController(IClientService service)
        {
            _clientService = service;
        }

        [HttpPost]
        public IActionResult RegisterClient(ClientModel client)
        {
            var success = _clientService.RegisterClient(client.ToEntity());

            if (success)
            {
                return Ok();
            }

            return BadRequest();
        }

        [HttpGet]
        public IActionResult GetClients()
        {
            var clients = _clientService.GetClients();

            return Ok(clients);
        }
    }
}
