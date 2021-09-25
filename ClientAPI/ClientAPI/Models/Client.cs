using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClientAPI.Models
{
    public class Client
    {
        [Key]      
        public int ClientID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }       
        [Required]
        [Column(TypeName = "nvarchar(150)")]
        public string Address { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string City { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string State { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string PostCode { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string Country { get; set; }
    }
}
