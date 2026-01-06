
import { Therapist } from '../types';

export const mockTherapists: Therapist[] = [
  {
    id: 't1',
    firstName: 'Sarah',
    specialization: 'Anxiety & Depression',
    bio: 'Specialized in CBT with over 10 years of experience helping individuals navigate stressful life transitions.',
    availability: ['2023-11-20T10:00:00Z', '2023-11-20T14:00:00Z', '2023-11-21T09:00:00Z']
  },
  {
    id: 't2',
    firstName: 'Omar',
    specialization: 'Family Therapy',
    bio: 'Focusing on building healthy family dynamics and interpersonal relationships through empathetic communication.',
    availability: ['2023-11-20T11:00:00Z', '2023-11-22T16:00:00Z']
  },
  {
    id: 't3',
    firstName: 'Elena',
    specialization: 'Trauma Specialist',
    bio: 'Dedicated to trauma-informed care and providing a safe space for processing deep emotional challenges.',
    availability: ['2023-11-21T15:00:00Z']
  }
];
