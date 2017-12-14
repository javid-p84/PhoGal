using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PhoApi.Controllers
{
    public class BasicController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok("Priviet" );
        }
    }
}
