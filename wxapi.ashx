<%@ WebHandler Language="C#" Class="wxapi" %>

using System;
using System.Web;
using System.Collections.Generic;

public class wxapi : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ClearHeaders();
        context.Response.AppendHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
        context.Response.AppendHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*");
        context.Response.ContentType = "application/x-www-form-urlencoded";
        context.Response.CacheControl = "no-cache";
        context.Response.Charset = "utf-8";

        const string token = "ligeweixintoken";

        string signature = context.Request["signature"],
                timestamp = context.Request["timestamp"],
                nonce = context.Request["nonce"],
                echostr = context.Request["echostr"];

        var parameter = new List<string> { token, timestamp, nonce };
        parameter.Sort();
        var parameterStr = parameter[0] + parameter[1] + parameter[2];
        var tempStr = parameterStr.ToLower();
        if (tempStr == signature)
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