# IFLOW.md

This file provides guidance to iFlow Cli when working with code in this repository.

## Project Overview

This is a **UniApp X** examination template project for building online testing applications. The project supports both static data simulation and dynamic backend integration via UniCloud.

## Development Environment

- **Framework**: UniApp X (Vue 3 + TypeScript)
- **IDE**: HBuilder X (primary development tool)
- **Cloud Platform**: UniCloud (Aliyun backend)
- **Target Platforms**: Android, iOS, Web, WeChat Mini Program

## Key Commands

### Development & Build
```bash
# Run in HBuilder X - use built-in run/debug buttons
# No standalone CLI commands available - use HBuilder X interface

# Build commands (via HBuilder X menu)
发行 -> 网站-H5手机版 (web)
发行 -> 小程序-微信 (WeChat Mini Program)
发行 -> App (Android/iOS)
```

### Cloud Functions
```bash
# Deploy cloud functions (run from HBuilder X)
# Right-click uniCloud-aliyun/cloudfunctions -> Upload Cloud Functions

# Test cloud functions locally
# Use HBuilder X built-in cloud function testing interface
# Tools -> 云函数本地运行调试
```

### Database Operations
```bash
# Database schema management via HBuilder X
# uniCloud-aliyun/database/*.schema.json files define collections
# Access via: 工具 -> 云数据库控制台
```

## Architecture Overview

### Frontend Structure
- **Entry Point**: `main.uts` - Vue SSR app initialization
- **App Component**: `App.uvue` - Global app lifecycle and styles
- **Pages**: 
  - `pages/index/index.uvue` - Home navigation
  - `pages/dynamic/index.uvue` - Backend integration with UniCloud
  - `pages/simulate/index.uvue` - Static data loading for testing
  - `pages/dynamic/answer.uvue` - Exam answering interface

### Core Architecture Patterns

#### 1. Data Flow Architecture
- **Static Mode**: Uses local data from `pages/simulate/data.uts`
- **Dynamic Mode**: Uses UniCloud cloud functions via API layer in `assets/api/`
- **State Management**: Component-level reactive state with Vue 3 Composition API

#### 2. API Layer Structure
```
assets/
├── api/
│   ├── exam.api.uts          # Cloud function API wrappers for exams
│   └── user.api.uts          # Cloud function API wrappers for users
├── type/
    ├── exam.types.uts        # Exam-related TypeScript interfaces
    ├── user.types.uts        # User-related TypeScript interfaces
    └── common.type.uts       # Shared response types
```

#### 3. Cloud Functions (uniCloud-aliyun/cloudfunctions/)

**Core Services:**
1. **appx-template-exam-exams** - Exam management
   - CRUD operations for exams
   - Status management (0=未开始, 1=进行中, 2=已结束)
   - Time validation (start < end)
   - Statistics and list operations for user exams

2. **appx-template-exam-questions** - Question management
   - Question CRUD with validation
   - Batch import support
   - Answer validation logic
   - Question types: single-choice (1), multiple-choice (2)

3. **appx-template-exam-records** - Answer records
   - User answer tracking
   - Score calculation
   - Historical data queries with user/exam/question joins

4. **appx-template-exam-users** - User management
   - Registration/login with SHA256 passwords
   - User info management
   - Mobile number support

5. **appx-template-exam-user-exams** - User-exam relationship management
   - Tracks which users are enrolled in which exams

#### 4. Database Collections
- `appx-template-exam-exams` - Exam definitions
- `appx-template-exam-questions` - Question bank
- `appx-template-exam-records` - User answers/scores
- `appx-template-exam-users` - User accounts
- `appx-template-exam-user-exams` - User-exam relationships

### Key Integration Points

#### Exam Flow Implementation
1. **Initialization**: Import data in `mounted()` (lines 95-111 in template)
2. **Question Navigation**: `update(current)` method for switching questions
3. **Answer Submission**: `submit()` method for final submission
4. **Timer**: Built-in countdown with auto-submit on expiry

#### Data Structure Standards
- **Questions**: `{content, type, score, options: [{key, value, is_correct}]}`
- **Exams**: `{name, start_time, end_time, duration, total_score, status}`
- **Records**: `{user_id, exam_id, question_id, answer, score, is_correct}`
- **Users**: `{username, password, mobile, status, create_time}`

## Development Workflow

### Template Customization Steps
1. **Data Initialization**: Update lines 66-69 and 95-111 in exam pages
2. **Question Updates**: Implement `update(current)` method (lines 126-132)
3. **Submission Logic**: Complete `submit()` method (lines 138-147)
4. **Backend Integration**: Replace static data with cloud function calls

### Testing Approach
- Use HBuilder X's built-in simulator
- Test cloud functions via UniCloud console
- Validate data schemas against `.schema.json` files

### Deployment
- **Frontend**: Use HBuilder X "发行" menu
- **Cloud Functions**: Right-click deployment in HBuilder X
- **Database**: Schema updates via UniCloud web console

## Common Development Tasks

### Adding New Question Types
1. Update question validation in `appx-template-exam-questions/index.js`
2. Add new type constants in frontend components
3. Update UI components to handle new question rendering

### Customizing Exam Logic
1. Modify cloud function validation rules
2. Update frontend state management in exam pages
3. Adjust scoring algorithms in records cloud function

### Styling Customization
- Global styles: `uni.scss` contains UniApp design tokens
- Component styles: Use scoped styles in `.uvue` files
- Theme colors: Primary color is `#3a397a` throughout the app

## Project Structure Overview

### Frontend Pages
1. **Home Page** (`pages/index/index.uvue`)
   - Entry point with navigation to dynamic or simulate modes
   - Simple UI with two main action buttons

2. **Dynamic Mode** (`pages/dynamic/index.uvue`)
   - Full backend integration with UniCloud
   - User authentication (login/registration)
   - Exam listing with status indicators
   - Statistics dashboard for user's exams

3. **Simulate Mode** (`pages/simulate/index.uvue`)
   - Static data loading for testing
   - Complete exam interface with timer
   - Question navigation and answer selection
   - Submission handling

4. **Answer Page** (`pages/dynamic/answer.uvue`)
   - Exam answering interface for dynamic mode
   - Question display with options
   - Answer tracking and navigation
   - Progress indicators and submission

### Backend Architecture
The backend is implemented using UniCloud cloud functions with a MongoDB-like database:

1. **User Management** (`appx-template-exam-users`)
   - Registration and authentication
   - User profile management
   - Password encryption with SHA256

2. **Exam Management** (`appx-template-exam-exams`)
   - Exam creation, update, and deletion
   - Exam listing with filtering and pagination
   - Status management (未开始, 进行中, 已结束)

3. **Question Management** (`appx-template-exam-questions`)
   - Question CRUD operations
   - Support for different question types (单选, 多选)
   - Answer validation

4. **Answer Records** (`appx-template-exam-records`)
   - Tracking user answers
   - Score calculation
   - Historical data queries

5. **User-Exam Relationships** (`appx-template-exam-user-exams`)
   - Tracks which users are enrolled in which exams
   - Manages exam access permissions

### Data Flow Patterns
1. **Static Mode Flow**:
   - Load questions from `pages/simulate/data.uts`
   - Display questions in exam interface
   - Track answers locally
   - Submit answers (to console in template)

2. **Dynamic Mode Flow**:
   - User authentication via cloud functions
   - Fetch exams and user statistics from backend
   - Load questions for selected exam
   - Track answers and submit to backend
   - Store results in database

### Component Architecture
1. **UI Components**:
   - Exam cards with status indicators
   - Question display with options
   - Answer tracking interface
   - Progress indicators
   - Authentication forms

2. **State Management**:
   - Reactive state with Vue 3 Composition API
   - Local state for UI interactions
   - Global state for user authentication
   - Exam progress tracking

3. **API Integration**:
   - Wrapper functions in `assets/api/`
   - Type definitions in `assets/type/`
   - Cloud function calls via `uniCloud.callFunction`