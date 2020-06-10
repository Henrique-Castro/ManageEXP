using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.ValueObjects
{
    public class ZabbixResponse<T>
    {
        public string jsonrpc { get; set; }
        T result { get; set; }
        string id { get; set; }
    }
}
