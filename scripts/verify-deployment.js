#!/usr/bin/env node

/**
 * Deployment verification script for Schedlyx
 * Ensures the project is ready for Vercel deployment
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🚀 Verifying Schedlyx deployment readiness...\n');

const runCommand = (command, description) => {
  console.log(`📋 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed successfully\n`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed\n`);
    return false;
  }
};

const checkFile = (filePath, description) => {
  console.log(`📁 Checking ${description}...`);
  if (existsSync(filePath)) {
    console.log(`✅ ${description} exists\n`);
    return true;
  } else {
    console.error(`❌ ${description} not found\n`);
    return false;
  }
};

const main = async () => {
  let success = true;
  
  console.log('🔍 Checking essential files...');
  success &= checkFile('package.json', 'Package configuration');
  success &= checkFile('vite.config.ts', 'Vite configuration');
  success &= checkFile('tsconfig.json', 'TypeScript configuration');
  success &= checkFile('vercel.json', 'Vercel configuration');
  success &= checkFile('.env.example', 'Environment template');
  success &= checkFile('src/main.tsx', 'React entry point');
  success &= checkFile('index.html', 'HTML entry point');
  
  console.log('📦 Installing dependencies...');
  success &= runCommand('npm ci', 'Installing dependencies');
  
  console.log('🔨 Building project...');
  success &= runCommand('npm run build', 'Building for production');
  
  console.log('🧪 Running tests...');
  success &= runCommand('npm run test src/__tests__/smoke.test.tsx', 'Running smoke tests');
  
  console.log('📊 Checking build output...');
  success &= checkFile('dist/index.html', 'Build HTML output');
  success &= checkFile('dist/assets', 'Build assets directory');
  
  if (success) {
    console.log('🎉 All checks passed! Schedlyx is ready for Vercel deployment.');
    console.log('\n📋 Deployment checklist:');
    console.log('  ✅ Project builds successfully');
    console.log('  ✅ Tests pass');
    console.log('  ✅ All required files present');
    console.log('  ✅ Vercel configuration ready');
    console.log('\n🚀 Deploy to Vercel:');
    console.log('  1. Push to GitHub');
    console.log('  2. Connect repo to Vercel');
    console.log('  3. Set environment variables');
    console.log('  4. Deploy!');
    process.exit(0);
  } else {
    console.error('\n❌ Some checks failed. Please fix the issues before deploying.');
    process.exit(1);
  }
};

main().catch(error => {
  console.error('❌ Verification script failed:', error);
  process.exit(1);
});