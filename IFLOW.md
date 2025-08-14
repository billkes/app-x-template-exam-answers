# IFLOW.md

This file provides guidance to iFlow Cli when working with code in this repository.

## Project Overview

This is a **uni-app x** exam/quiz template project designed for online testing, homework, and practice questions. The project uses a **client-server architecture** with:

- **Frontend**: uni-app x (Vue 3 + UTS + UVUE) for cross-platform mobile apps
- **Backend**: uniCloud (Alibaba Cloud) with Node.js cloud functions
- **Database**: MongoDB via uniCloud database

## Architecture

### Frontend Structure
- **Single-page application** with one main exam interface
- **UVUE components** for UI rendering
- **UTS (TypeScript)** for business logic
- **Real-time countdown timer** with auto-submit functionality
- **Question navigation** with visual progress indicators

### Backend Cloud Functions
Four main cloud functions handle the exam system:

1. **appx-template-exam-exams**: Exam management (CRUD operations)
2. **appx-template-exam-questions**: Question management with validation
3. **appx-template-exam-records**: Answer recording and scoring
4. **appx-template-exam-users**: User authentication and management

### Database Schema
- **appx-template-exam-exams**: Stores exam metadata (title, duration, status)
- **appx-template-exam-questions**: Stores questions with options and answers
- **appx-template-exam-records**: Stores user answers and scores
- **appx-template-exam-users**: Stores user accounts and authentication

## Development Commands

### Build & Run
```bash
# Run in HBuilderX (primary development environment)
# No CLI build commands - use HBuilderX GUI

# For uniCloud development
npm run dev:%PLATFORM%    # Development mode
npm run build:%PLATFORM%  # Production build
```

### Cloud Functions
```bash
# Deploy cloud functions (from uniCloud-aliyun directory)
uniCloud deploy --function appx-template-exam-exams
uniCloud deploy --function appx-template-exam-questions
uniCloud deploy --function appx-template-exam-records
uniCloud deploy --function appx-template-exam-users

# Deploy database schema
uniCloud deploy --db
```

### Testing
```bash
# Test cloud functions locally
uniCloud run --function appx-template-exam-questions --data '{"action":"list"}'

# Test specific actions
uniCloud run --function appx-template-exam-questions --data '{"action":"validateAnswer","params":{"question_id":"xxx","user_answer":"A"}}'
```

## Key Integration Points

### Frontend Data Flow
1. **Initialization**: `pages/index/index.uts` line 95-111 loads sample data from `dataList`
2. **Question Updates**: `update()` method (line 126-132) called on question change
3. **Submission**: `submit()` method (line 138-147) handles final answer submission

### Backend API Endpoints
All cloud functions use action-based routing:
- `action: 'create'/'update'/'delete'/'get'/'list'` for CRUD operations
- `action: 'validateAnswer'` for real-time answer checking
- `action: 'getExamQuestions'` for fetching exam-specific questions

### Data Format
- **Questions**: `{name, options[], type, select}`
- **Answers**: Comma-separated string for multiple answers (`A,,B,,C`)
- **Scoring**: Automatic validation against correct answers in database

## Configuration Files

### Critical Files
- `manifest.json`: App configuration and platform settings
- `pages.json`: Navigation and page routing
- `uniCloud-aliyun/cloudfunctions/*/index.js`: Backend logic
- `uniCloud-aliyun/database/*.schema.json`: Database schemas

### Environment Setup
- **HBuilderX**: Required IDE for uni-app x development
- **uniCloud**: Alibaba Cloud account for backend services
- **Node.js**: For cloud function development

## Common Development Tasks

### Adding New Questions
1. Modify `pages/index/index.uts` - update `dataList` array
2. Ensure question format matches `DataType` interface
3. Test with local development server

### Customizing Exam Logic
1. Backend: Modify cloud functions in `uniCloud-aliyun/cloudfunctions/`
2. Frontend: Update submission logic in `pages/index/index.uvue` methods
3. Database: Adjust schemas in `uniCloud-aliyun/database/` if needed

### Styling Changes
- Use SCSS in `.uvue` files
- Follow the existing gradient design system
- Maintain responsive design for mobile platforms