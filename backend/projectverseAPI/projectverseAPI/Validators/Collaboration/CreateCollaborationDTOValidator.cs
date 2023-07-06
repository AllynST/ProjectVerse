﻿using FluentValidation;
using projectverseAPI.DTOs.Collaboration;

namespace projectverseAPI.Validators.Collaboration
{
    public class CreateCollaborationDTOValidator : AbstractValidator<CreateCollaborationDTO>
    {
        public CreateCollaborationDTOValidator()
        {
            RuleFor(x => x.Name)
                .NotNull()
                .NotEmpty();

            RuleFor(x => x.Description)
                .NotNull()
                .NotEmpty()
                .MaximumLength(450);

            RuleFor(x => x.Difficulty)
                .NotNull()
                .InclusiveBetween(1, 3);

            RuleFor(x => x.Technologies)
                .NotNull()
                .Must(x => x.Count > 0)
                .WithMessage("Collaboration must have at least one technology.");

            RuleFor(x => x.CollaborationPositions)
                .NotNull()
                .Must(x => x.Count > 0)
                .WithMessage("Collaboration must have at least one position offer.");

        }
    }
}
