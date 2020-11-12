using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using app.Models;

namespace app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserContext _context;

        public UserController(UserContext context)
        {
            _context = context;
        }

        // GET: api/User
        [HttpGet]
        public IEnumerable<Tbl_User> GetTbl_User()
        {
            return _context.Tbl_User;
        }

        // GET: api/User/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTbl_User([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tbl_User = await _context.Tbl_User.FindAsync(id);

            if (tbl_User == null)
            {
                return NotFound();
            }

            return Ok(tbl_User);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTbl_User([FromRoute] int id, [FromBody] Tbl_User tbl_User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_User.UserID)
            {
                return BadRequest();
            }

            _context.Entry(tbl_User).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Tbl_UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/User
        [HttpPost]
        public async Task<IActionResult> PostTbl_User([FromBody] Tbl_User tbl_User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tbl_User.Add(tbl_User);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTbl_User", new { id = tbl_User.UserID }, tbl_User);
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTbl_User([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tbl_User = await _context.Tbl_User.FindAsync(id);
            if (tbl_User == null)
            {
                return NotFound();
            }

            _context.Tbl_User.Remove(tbl_User);
            await _context.SaveChangesAsync();

            return Ok(tbl_User);
        }

        private bool Tbl_UserExists(int id)
        {
            return _context.Tbl_User.Any(e => e.UserID == id);
        }
    }
}