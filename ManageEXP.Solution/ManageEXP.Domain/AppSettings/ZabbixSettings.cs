using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManageEXP.Domain.AppSettings
{
    public class ZabbixSettings
    {
        public static string Url { get; set; }
        public static string Version { get; set; }
        public static string Token = null;
    }
}
