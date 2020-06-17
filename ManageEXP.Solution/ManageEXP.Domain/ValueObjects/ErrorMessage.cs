using System;
using System.Collections.Generic;
using System.Text;

namespace ManageEXP.Domain.ValueObjects
{
    public class ErrorMessage
    {
        public int code { get; set; }
        public string data { get; set; }
        public string message { get; set; }

        public string GetErrorMessage()
        {
            return string.Format($"Code: {code}, Data: {data}, Message: {message}");
        }
    }
}
