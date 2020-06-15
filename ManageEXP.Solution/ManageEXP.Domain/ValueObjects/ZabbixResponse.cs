using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.ValueObjects
{
    public class ZabbixResponse<T>
    {
        public string jsonrpc { get; set; }
        public T result { get; set; }
        public string id { get; set; }
    }
}
