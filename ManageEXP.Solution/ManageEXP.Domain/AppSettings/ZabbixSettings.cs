using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManageEXP.Domain.AppSettings
{
    public class ZabbixSettings
    {
        public string Url { get; set; }
        public string Version { get; set; }
        public static string Token = null;
    }
}
