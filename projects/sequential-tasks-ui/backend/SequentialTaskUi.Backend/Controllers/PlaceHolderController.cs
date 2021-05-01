using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;

namespace SequentialTaskUi.Backend.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class PlaceHolderController : ControllerBase
    {
        [HttpGet]
        public PlaceHolder GetSuccess()
        {
            var rng = new Random();
            var waitTime = rng.Next(500, 1500);
            Thread.Sleep(waitTime);
            return new PlaceHolder
            {
                Response = $"{nameof(GetSuccess)} has succeeded and returned in ~{waitTime}ms.",
            };
        }
        
        [HttpGet]
        public PlaceHolder GetFailed()
        {
            var rng = new Random();
            var waitTime = rng.Next(200, 700);
            Thread.Sleep(waitTime);
            return new PlaceHolder
            {
                Error = $"{nameof(GetFailed)} has encountered and error and returned in ~{waitTime}ms.",
            };
        }
        
        [HttpGet]
        public PlaceHolder GetException()
        {
            var rng = new Random();
            var waitTime = rng.Next(200, 700);
            Thread.Sleep(waitTime);
            throw new Exception($"{nameof(GetException)} has thrown an exceptionm after ~{waitTime}ms.");
        }
    }

    public class PlaceHolder : GenericResponse
    {
        public string Response { get; set; }
    }

    public class GenericResponse
    {
        public string Error { get; set; }
    }
}
