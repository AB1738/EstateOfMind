using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;


namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertyController : ControllerBase
    {
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
        ImageUrl = "https://example.com/images/cottage.jpg"
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
        ImageUrl = "https://example.com/images/apartment.jpg"
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
        ImageUrl = "https://example.com/images/villa.jpg"
    }
};
        //Maps property object to propety dto object
        public static PropertyDTO ToDTO(Property property)
        {
            return new PropertyDTO
            {
                Id = property.Id,
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
        public IEnumerable<PropertyDTO> GetProperties()
        {
            //mapping each property to a propertyDTO and returning it as a list
            var propertyDtos = properties.Select(property => ToDTO(property)).ToList();
            return propertyDtos;

        }
        [HttpGet("{Id}")]
        public ActionResult<PropertyDTO> GetPropertyById(int Id)
        {
            var property = properties.FirstOrDefault(x => x.Id == Id);
            if (property == null)
            {
                return NotFound();
            }
            var propertyDto = ToDTO(property);
            return Ok(propertyDto);
        }

        [HttpPost]
        public ActionResult<PropertyDTO> AddProperty(PropertyDTO propertyDto)
        {
            // Console.WriteLine("Creating a new property");
            int Id = properties.Max(x => x.Id) + 1;
            propertyDto.Id = Id;
            Property property = new Property
            {
                Id = propertyDto.Id,
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
            properties.Add(property);
            return Ok(propertyDto);
        }

        [HttpPut("{Id}")]

        public IActionResult UpdateProperty(int Id, PropertyDTO propertyDto)
        {
            // Console.WriteLine($"Updating property with id of {id}");
            var existingProperty = properties.FirstOrDefault(x => x.Id == Id);
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


