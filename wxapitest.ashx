<%@ WebHandler Language="C#" Class="WXApitest" %>

using System;
using System.Web;
using System.Collections.Generic;

public class WXApitest : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        context.Response.ClearHeaders();
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*");
        context.Response.AppendHeader("Access-Control-Allow-Headers", "*");
        context.Response.AppendHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
        context.Response.ContentType = "application/x-www-form-urlencoded";
        context.Response.CacheControl = "no-cache";
        context.Response.Charset = "utf-8";

        const string token = "ligeweixintoken";

        string signature = context.Request["signature"],
                timestamp = context.Request["timestamp"],
                nonce = context.Request["nonce"],
                echostr = context.Request["echostr"];

        List<string> parameter = new List<string>();
        parameter.Add(token);
        parameter.Add(timestamp);
        parameter.Add(nonce);
        parameter.Sort();
        var parameterStr = parameter[0] + parameter[1] + parameter[2];
        var tempStr = parameterStr.ToLower();
        //if (tempStr == signature)
        context.Response.Write(echostr);
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}