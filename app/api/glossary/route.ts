import { NextResponse } from 'next/server';
import { mockGlossaryTerms } from '@/lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search')?.toLowerCase();

  let terms = mockGlossaryTerms;

  if (category) {
    terms = terms.filter(term => term.category === category);
  }

  if (search) {
    terms = terms.filter(term => 
      term.title.toLowerCase().includes(search) || 
      term.content.toLowerCase().includes(search)
    );
  }

  return NextResponse.json(terms);
}