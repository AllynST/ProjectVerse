﻿using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using projectverseAPI.Constants;
using projectverseAPI.DTOs;
using projectverseAPI.DTOs.Post;
using projectverseAPI.Interfaces;

namespace projectverseAPI.Controllers
{
    [ApiController]
    [Route("api/posts")]
    [Produces("application/json")]
    [Consumes("application/json")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PostController : ControllerBase
    {
        private readonly IAuthorizationService _authorizationService;
        private readonly IProjectService _projectService;
        private readonly IPostService _postService;
        private readonly IMapper _mapper;

        public PostController(
            IAuthorizationService authorizationService,
            IProjectService projectService,
            IPostService postService,
            IMapper mapper)
        {
            _authorizationService = authorizationService;
            _projectService = projectService;
            _postService = postService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<CreateResponseDTO>> CreatePost([FromBody] CreatePostRequestDTO createPostDTO)
        {
            try
            {
                var createdPostId = await _postService.CreatePost((Guid)createPostDTO.ProjectId!);

                return CreatedAtAction(
                    "CreatePost",
                    new CreateResponseDTO { Id = createdPostId });
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
            catch (InvalidOperationException e)
            {
                return BadRequest(new ErrorResponseDTO
                {
                    Title = "Bad Request",
                    Status = StatusCodes.Status400BadRequest,
                    Errors = e.Message
                });
            }
        }

        [HttpGet]
        public async Task<ActionResult<List<PostResponseDTO>>> GetAllPosts()
        {
            var posts = await _postService.GetAllPosts();
            var postsResponse = posts.Select(p => _mapper.Map<PostResponseDTO>(p));

            return Ok(postsResponse);
        }

        [HttpDelete]
        [Route("{projectId}")]
        public async Task<IActionResult> DeletePost([FromRoute] Guid projectId)
        {
            try
            {
                var project = await _projectService.GetProjectById(projectId);
                var authorizationResult = await _authorizationService.AuthorizeAsync(User, project, PolicyConstants.SameAuthorPolicy);
                if (!authorizationResult.Succeeded)
                    return Forbid();

                await _postService.DeletePost(projectId);

                return NoContent();
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
        }

        [HttpPatch]
        [Route("{postId}/views")]
        public async Task<IActionResult> RecordPostView([FromRoute] Guid postId)
        {
            try
            {
                await _postService.RecordPostView(postId);

                return NoContent();
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
        }

        [HttpGet]
        [Route("{postId}/comments")]
        public async Task<ActionResult<List<PostCommentDTO>>> GetAllPostCommentsFromPost([FromRoute] Guid postId)
        {
            try
            {
                var comments = await _postService.GetAllPostCommentsFromPost(postId);
                var commentsResponse = comments.Select(c => _mapper.Map<PostCommentDTO>(c));

                return Ok(commentsResponse);
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
        }

        [HttpPost]
        [Route("{postId}/comments")]
        public async Task<ActionResult<CreateResponseDTO>> CreatePostComment(Guid postId, CreatePostCommentRequestDTO createPostCommentDTO)
        {
            try
            {
                var createdId = await _postService.CreatePostComment(postId, createPostCommentDTO);

                return CreatedAtAction(
                    "CreatePostComment",
                    new CreateResponseDTO { Id = createdId });
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
        }

        [HttpDelete]
        [Route("comments/{commentId}")]
        public async Task<IActionResult> DeletePostComment([FromRoute] Guid commentId)
        {
            try
            {
                var comment = await _postService.GetPostCommentById(commentId);
                var authorizationResult = await _authorizationService.AuthorizeAsync(User, comment, PolicyConstants.SameAuthorPolicy);
                if (!authorizationResult.Succeeded)
                    return Forbid();

                await _postService.DeletePostComment(commentId);

                return NoContent();
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
        }

        [HttpPut]
        [Route("{commentId}")]
        public async Task<IActionResult> UpdatePostComment([FromRoute] Guid commentId, UpdatePostCommentRequestDTO updatePostDTO)
        {
            try
            {
                if (commentId != updatePostDTO.Id)
                    return BadRequest(new ErrorResponseDTO
                    {
                        Title = "Bad Request",
                        Status = StatusCodes.Status400BadRequest,
                        Errors = new
                        {
                            Id = new List<string> { "Route id and object id don't match." }
                        }
                    });

                var comment = await _postService.GetPostCommentById(commentId);
                var authorizationResult = await _authorizationService.AuthorizeAsync(User, comment, PolicyConstants.SameAuthorPolicy);
                if (!authorizationResult.Succeeded)
                    return Forbid();

                await _postService.UpdatePostComment(updatePostDTO);
                return NoContent();
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
        }

        [HttpPost]
        [Route("{postId}/like")]
        public async Task<IActionResult> LikePost([FromRoute] Guid postId)
        {
            try
            {
                await _postService.LikePost(postId);

                return NoContent();
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
            catch (InvalidOperationException e)
            {
                return BadRequest(new ErrorResponseDTO
                {
                    Title = "Bad Request",
                    Status = StatusCodes.Status400BadRequest,
                    Errors = e.Message
                });
            }
        }

        [HttpDelete]
        [Route("{postId}/unlike")]
        public async Task<IActionResult> UnlikePost([FromRoute] Guid postId)
        {
            try
            {
                await _postService.UnlikePost(postId);

                return NoContent();
            }
            catch (ArgumentException e)
            {
                return NotFound(new ErrorResponseDTO
                {
                    Title = "Not Found",
                    Status = StatusCodes.Status404NotFound,
                    Errors = e.Message
                });
            }
        }
    }
}