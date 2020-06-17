using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;

namespace ManageEXP.Domain.ValueObjects
{
    public class ZabbixResponse
    {
        public int id { get; set; }
        public string jsonrpc { get; set; }
        public dynamic result = new ExpandoObject();
        public ErrorMessage error { get; set; }
    }
}
