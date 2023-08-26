import { Controller, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from '../dto/create-review.dto';
import { Review } from './review.entity';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post(':movieId')
  async createReview(
    @Param('movieId', ParseIntPipe) movieId: number,
    @Body() createReviewDto: CreateReviewDto,
  ): Promise<Review> {
    const { rating, content } = createReviewDto;
    const review = await this.reviewService.createReview(
      movieId,
      rating,
      content,
    );
    return review;
  }
}
