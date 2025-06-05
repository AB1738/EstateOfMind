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
                State = property.State,
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
                State = propertyDto.State,
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

        public async Task<IActionResult> UpdateProperty(int Id, [FromBody] PropertyDTO propertyDto)
        {
            var existingProperty = await _context.Properties.FindAsync(Id);

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
            existingProperty.State = propertyDto.State;
            existingProperty.Price = propertyDto.Price;
            existingProperty.Bedrooms = propertyDto.Bedrooms;
            existingProperty.Bathrooms = propertyDto.Bathrooms;
            existingProperty.SqFt = propertyDto.SqFt;
            existingProperty.ImageUrl = propertyDto.ImageUrl;

            if (!TryValidateModel(existingProperty))
                return BadRequest(ModelState); // Return a 400 Bad Request if validation fails

            await _context.SaveChangesAsync();
            return Ok(existingProperty);

        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteProperty(int Id)
        {
            // var property = properties.FirstOrDefault(x => x.Id == Id);
            var property = await _context.Properties.FindAsync(Id);
            if (property == null)
            {
                return NotFound();
            }
            // properties.Remove(property);
            _context.Remove(property);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}


