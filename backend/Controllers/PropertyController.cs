using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using Microsoft.EntityFrameworkCore;


namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertyController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PropertyController(AppDbContext context)
        {
            _context = context;
        }
        private static List<Property> properties = new List<Property>
{
    new Property
    {
        Id = 1,
        Title = "Cozy Cottage",
        Description = "A small, charming cottage with a lovely garden.",
        Address = "123 Maple Street",
        City = "Springfield",
        Price = 250000,
        Bedrooms = 2,
        Bathrooms = 1,
        SqFt = 900,
        ImageUrl = "https://images.pexels.com/photos/5389185/pexels-photo-5389185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    new Property
    {
        Id = 2,
        Title = "Modern Apartment",
        Description = "Spacious downtown apartment with skyline views.",
        Address = "456 Oak Avenue",
        City = "Metropolis",
        Price = 450000,
        Bedrooms = 3,
        Bathrooms = 2,
        SqFt = 1200,
        ImageUrl = "https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    new Property
    {
        Id = 3,
        Title = "Luxury Villa",
        Description = "Large villa with a pool and garden.",
        Address = "789 Palm Drive",
        City = "Beverly Hills",
        Price = 2250000,
        Bedrooms = 5,
        Bathrooms = 4,
        SqFt = 3500,
        ImageUrl = "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    new Property
    {
        Id = 4,
  Title= "Luxury Mansion",
  Description= "A magnificent mansion with state-of-the-art amenities, a private cinema, and an expansive garden perfect for entertaining guests.",
  Address= "456 Palm Drive, Malibu",
  City= "Malibu",
  Price= 18000000,
  Bedrooms= 10,
  Bathrooms= 12,
  SqFt= 20000,
  ImageUrl= "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    new Property
    {
        Id = 5,
  Title= "Modern Family Home",
  Description= "A beautiful modern home with spacious living areas, a fully equipped kitchen, and a cozy backyard perfect for family gatherings.",
  Address= "789 Maple St, Green City",
  City= "Green City",
  Price= 450000,
  Bedrooms= 4,
  Bathrooms= 3,
  SqFt= 2500,
  ImageUrl= "https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    new Property
    {
        Id = 6,
  Title= "Cozy Countryside Retreat",
  Description= "A charming countryside house with rolling hills views, a large garden, and a peaceful atmosphere away from the city bustle.",
  Address= "123 Greenfield Rd, Rolling Meadows",
  City= "Rolling Meadows",
  Price= 350000,
  Bedrooms= 3,
  Bathrooms= 2,
  SqFt= 1800,
  ImageUrl= "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

};
        //Maps property object to propety dto object
        public static PropertyDTO ToDTO(Property property)
        {
            return new PropertyDTO
            {
                // Id = property.Id,
                Title = property.Title,
                Description = property.Description,
                Address = property.Address,
                City = property.City,
                Price = property.Price,
                Bedrooms = property.Bedrooms,
                Bathrooms = property.Bathrooms,
                SqFt = property.SqFt,
                ImageUrl = property.ImageUrl
            };
        }

        [HttpGet]
        public async Task<IEnumerable<Property>> GetProperties()
        {
            var properties = await _context.Properties.ToListAsync();
            // var propertyDtos = properties.Select(property => ToDTO(property)).ToList();
            //mapping each property to a propertyDTO and returning it as a list
            // var propertyDtos = properties.Select(property => ToDTO(property)).ToList();
            return properties;

        }
        // public IEnumerable<PropertyDTO> GetProperties()
        // {
        //     //mapping each property to a propertyDTO and returning it as a list
        //     var propertyDtos = properties.Select(property => ToDTO(property)).ToList();
        //     return propertyDtos;

        // }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Property>> GetPropertyById(int Id)
        {
            var property = await _context.Properties.FindAsync(Id);
            // var property = properties.FirstOrDefault(x => x.Id == Id);
            if (property == null)
            {
                return NotFound();
            }
            // var propertyDto = ToDTO(property);
            return Ok(property);
        }

        [HttpPost]
        public async Task<ActionResult<PropertyDTO>> AddProperty([FromBody] PropertyDTO propertyDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return a 400 Bad Request if validation fails
            }
            Property property = new Property
            {
                Title = propertyDto.Title,
                Description = propertyDto.Description,
                Address = propertyDto.Address,
                City = propertyDto.City,
                Price = propertyDto.Price,
                Bedrooms = propertyDto.Bedrooms,
                Bathrooms = propertyDto.Bathrooms,
                SqFt = propertyDto.SqFt,
                ImageUrl = propertyDto.ImageUrl
            };

            if (!TryValidateModel(property))
                return BadRequest(ModelState); // Return a 400 Bad Request if validation fails

            _context.Properties.Add(property);
            await _context.SaveChangesAsync();
            return Ok(propertyDto);
        }



        [HttpPut("{Id}")]

        public IActionResult UpdateProperty(int Id, [FromBody] PropertyDTO propertyDto)
        {
            var existingProperty = properties.FirstOrDefault(x => x.Id == Id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return a 400 Bad Request if validation fails
            }

            if (existingProperty == null)
                return NotFound();
            existingProperty.Title = propertyDto.Title;
            existingProperty.Description = propertyDto.Description;
            existingProperty.Address = propertyDto.Address;
            existingProperty.City = propertyDto.City;
            existingProperty.Price = propertyDto.Price;
            existingProperty.Bedrooms = propertyDto.Bedrooms;
            existingProperty.Bathrooms = propertyDto.Bathrooms;
            existingProperty.SqFt = propertyDto.SqFt;
            existingProperty.ImageUrl = propertyDto.ImageUrl;

            if (!TryValidateModel(existingProperty))
                return BadRequest(ModelState); // Return a 400 Bad Request if validation fails

            return Ok(existingProperty);

        }

        [HttpDelete("{Id}")]
        public IActionResult DeleteProperty(int Id)
        {
            // Console.WriteLine($"Deleting property with id of {id}");
            var property = properties.FirstOrDefault(x => x.Id == Id);
            if (property == null)
            {
                return NotFound();
            }
            properties.Remove(property);
            return NoContent();
        }
    }
}


