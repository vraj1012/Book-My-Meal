using Microsoft.EntityFrameworkCore;

namespace BookMyMeal.DbContext
{
    public class DbContexts : Microsoft.EntityFrameworkCore.DbContext
    {

        public DbContexts(DbContextOptions<DbContexts> options) : base(options)
        {

        }

    }
}
