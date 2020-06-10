using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.ValueObjects
{
    public class ZabbixRequest
    {
        public ZabbixRequest(string jsonrpc, string method, object[] @params, string id, string auth)
        {
            this.jsonrpc = jsonrpc;
            this.method = method;
            this.Params = @params;
            this.id = id;
            this.auth = auth;
        }

        public string jsonrpc
        {
            get
            {
                if(jsonrpc.Length <= 0)
                {
                    return "2.0";
                }
                else
                {
                    return jsonrpc;
                }
            }
            set { }
        }
        public string method { get; set; }
        [JsonProperty("params")]
        public object[] Params { get; set; }
        public string id { get; set; }
        public string auth { get; set; }
    }
}
