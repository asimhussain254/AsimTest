using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace app.Models
{
    public class Tbl_User
    {
        [Key]
        public int UserID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Password { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string NIC { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(200)")]
        public string Address { get; set; }
    }
}
