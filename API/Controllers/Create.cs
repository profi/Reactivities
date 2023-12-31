using System;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using SQLitePCL;

namespace API.Controllers
{
    public class Create
    {
        public class Comand : IRequest
        {
            public Activity Activity {get; set;}
        }

        public class Handler : IRequestHandler<Comand>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task Handle(Comand request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();

            }
        }
    }
}