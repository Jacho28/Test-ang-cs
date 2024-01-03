using Microsoft.AspNetCore.Mvc;
using TestAPI.Models;

namespace TestAPI.Controllers;

[ApiController]
[Route("api/[controller]s")]

public class UserController: ControllerBase
{
    private static readonly string[] Names = new[]
    {
        "Juan", "Javier", "Pedro", "Carlos", "Ricardo", "Mario", "Pablo", "Alejandro", "Santiago", "Jaime", "Jesus", "Adrian", "Ramiro", "Raul", "Francisco"
    };

    private static readonly string[] Lastnames = new[]
    {
        "Dominguez", "Sanchez", "Gomez", "Rodriguez", "Zapata", "Reyes", "Ayala", "Ocampo", "Smith", "Newgate", "Bosch"
    };

    private static readonly string[] Domains = new[]
    {
        "gmail", "outlook", "hotmail", "icloud", "corp", 
    };

    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetUser")]
    public IEnumerable<User> Get()
    {
        string name = Names[Random.Shared.Next(Names.Length)];
        return Enumerable.Range(1, 10).Select(index => new User
        {
            Id = index,
            Name = Names[Random.Shared.Next(Names.Length)] + " " + Lastnames[index],
            Email = Lastnames[index] + "@" + Domains[Random.Shared.Next(Domains.Length)] + ".com", 
        })
        .ToArray();
    }

}