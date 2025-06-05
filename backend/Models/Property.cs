using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace backend.Models
{
    public class Property
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MinLength(5)]
        [MaxLength(100)]
        public string Title { get; set; }
        [Required]
        [MinLength(10)]
        [MaxLength(1000)]
        public string Description { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string State { get; set; }
        [Range(0, 99999999999.99)]
        public decimal Price { get; set; }
        [Required]
        public int Bedrooms { get; set; }
        [Required]
        public int Bathrooms { get; set; }
        [Required]
        public int SqFt { get; set; }
        [Required]
        public string ImageUrl { get; set; }

        public DateTime? CreatedAt { get; set; }

        public Property()
        {
            CreatedAt = DateTime.UtcNow;
        }

    }
}