using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;

namespace ManageEXP.Domain.ValueObjects
{
    public class ZabbixRequest
    {
        public ZabbixRequest(string jsonrpc, string method, dynamic parameters, int id, string auth)
        {
            this.parameters = ReferenceEquals(null, parameters) ? new object[0] : JsonConvert.DeserializeObject<ExpandoObject>(parameters.ToString());         
            this.jsonrpc = jsonrpc;
            this.method = method;
            this.id = id;
            this.auth = auth == "" ? null : auth;
        }

        public string jsonrpc { get; set; }
        public string method { get; set; }
        public int id { get; set; }
        public string auth { get; set; }
        [JsonProperty("params")]
        public dynamic parameters { get; set; }
    }
}
