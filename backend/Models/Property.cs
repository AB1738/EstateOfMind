using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public decimal? Price { get; set; }
        public int? Bedrooms { get; set; }
        public int? Bathrooms { get; set; }
        public int? SqFt { get; set; }
        public string? ImageUrl { get; set; }

        public DateTime? CreatedAt { get; set; }

        public Property()
        {
            CreatedAt = DateTime.UtcNow;
        }

    }
}