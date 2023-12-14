﻿using Microsoft.EntityFrameworkCore;
using projectverseAPI.Data;
using projectverseAPI.DTOs.UserProfileData;
using projectverseAPI.Interfaces;
using projectverseAPI.Models;

namespace projectverseAPI.Services
{
    public class UserProfileDataService : IUserProfileDataService
    {
        private readonly ProjectVerseContext _context;

        public UserProfileDataService(
            ProjectVerseContext context)
        {
            _context = context;
        }

        public async Task<UserProfileData> Create(User user)
        {
            using var transaction = _context.Database.BeginTransaction();
            try
            {
                var newProfileData = new UserProfileData
                {
                    Id = Guid.NewGuid(),
                    User = user,
                    UserId = Guid.Parse(user.Id)
                };

                var createdEntity = await _context.UserProfileData.AddAsync(newProfileData);

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return createdEntity.Entity;
            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

        public async Task<UserProfileData> GetById(Guid id)
        {
            var profileData = await _context.UserProfileData
                .AsNoTracking()
                .Where(p => p.Id == id)
                .Include(p => p.User)
                .Include(p => p.Certificates)
                .Include(p => p.Educations)
                .Include(p => p.Socials)
                .Include(p => p.KnownTechnologies)
                .Include(p => p.Interests)
                .FirstOrDefaultAsync();

            if (profileData is null)
                throw new ArgumentException("Profile doesn't exist.");

            return profileData;
        }

        public async Task<UserProfileData> Update(UpdateUserProfileDataRequestDTO entity)
        {
            using var transaction = _context.Database.BeginTransaction();
            try
            {
                var profileData = await _context.UserProfileData
                    .Where(p => p.Id == entity.Id)
                    .FirstOrDefaultAsync();

                if (profileData is null)
                    throw new ArgumentException("Profile doesn't exist.");

                profileData.AboutMe = entity.AboutMe;
                profileData.Achievements = entity.Achievements;
                profileData.PrimaryTechnology = entity.PrimaryTechnology;
                profileData.Interests = entity.Interests;
                profileData.Certificates = entity.Certificates;
                profileData.Educations = entity.Educations;
                profileData.KnownTechnologies = entity.KnownTechnologies;
                profileData.Socials = entity.Socials;

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return profileData;
            }
            catch (ArgumentException)
            {
                await transaction.RollbackAsync();
                throw;
            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                throw;
            }

        }
    }
}
