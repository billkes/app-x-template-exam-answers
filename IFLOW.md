# IFLOW.md

This file provides guidance to iFlow Cli when working with code in this repository.

## Project Architecture

**uni-app x** exam template with single-page frontend and uniCloud backend:
- **Frontend**: UVUE single page (`pages/index/index.uvue`) with TypeScript logic
- **Backend**: 4 cloud functions in `uniCloud-aliyun/cloudfunctions/`
- **Database**: MongoDB collections defined in `uniCloud-aliyun/database/*.schema.json`

## Development Environment

**Required**: HBuilderX IDE (no CLI build system)
- Open project in HBuilderX
- Use built-in uniCloud console for backend management
- Platform builds handled via HBuilderX GUI

## Commands

### Cloud Functions (uniCloud CLI)
```bash
# From project root
cd uniCloud-aliyun

# Deploy individual functions
uniCloud deploy --function appx-template-exam-exams
uniCloud deploy --function appx-template-exam-questions  
uniCloud deploy --function appx-template-exam-records
uniCloud deploy --function appx-template-exam-users

# Deploy database schemas
uniCloud deploy --db

# Test functions locally
uniCloud run --function appx-template-exam-questions --data '{"action":"list"}'
```

### Frontend Development
- **Hot reload**: Automatic in HBuilderX dev mode
- **Data source**: Modify `pages/index/index.uts` `dataList` array for questions
- **Integration points**: 
  - `update()` method (line 126-132) - question change handler
  - `submit()` method (line 138-147) - answer submission

## API Structure

All cloud functions use action-based routing:
```javascript
// Common pattern
{
  action: 'create'|'update'|'delete'|'get'|'list',
  params: {...}
}
```

**Key endpoints**:
- `validateAnswer` - Real-time answer checking
- `getExamQuestions` - Fetch questions by exam_id
- `batchCreateQuestions` - Import multiple questions

## Data Flow

**Frontend → Backend**:
1. Questions loaded from `dataList` in `pages/index/index.uts`
2. Answers collected as comma-separated strings (`A,,B,,C`)
3. Submitted via cloud function calls

**Database Collections**:
- `appx-template-exam-exams` - Exam metadata
- `appx-template-exam-questions` - Questions with options/answers  
- `appx-template-exam-records` - User responses
- `appx-template-exam-users` - Authentication

## Configuration Files
- `manifest.json` - App settings and platform targets
- `pages.json` - Single page route configuration
- `uni.scss` - Global styles (gradient theme system)