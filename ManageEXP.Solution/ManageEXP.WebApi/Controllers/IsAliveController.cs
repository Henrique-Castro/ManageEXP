using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ManageEXP.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IsAliveController : ControllerBase
    {
        [HttpGet]
        public IActionResult IsAlive()
        {
            return Ok("I'm working. :)");
        }
    }
}
