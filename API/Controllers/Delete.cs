using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id {get; set;}
        }

        public class Handle : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handle(DataContext context)
            {
                _context = context;
            }
            async Task IRequestHandler<Command>.Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                _context.Activities.Remove(activity);

                await _context.SaveChangesAsync();

            }
        }
    }
}