using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Querry : IRequest<List<Activity>>{}
        public class Handler : IRequestHandler<Querry,List<Activity>>
        {
            private readonly DataContext _context;
             public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activity>> Handle(Querry request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}