using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest<Unit>
        {
            public int Id { get; set; }
        }

        public class Handler
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity == null)
                {
                    // Handle the case where the activity is not found
                    throw new Exception("Activity not found");
                }

                _context.Remove(activity);

                await _context.SaveChangesAsync(cancellationToken);

                var success = Unit.Value;

                return success;
            }
        }
    }
}