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
        readonly IItemService _itemService;

        public ItemController(ItemService service)
        {
            _itemService = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetItem(ZabbixRequest request)
        {
            var result = await _itemService.GetItem(request);

            return Ok(result);
        }
    }
}