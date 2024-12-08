import { db } from './config';
import { doc, getDoc, setDoc, updateDoc, query, collection, where, getDocs } from 'firebase/firestore';
import type { User } from '@/types/user';

export async function getUser(address: string): Promise<User | null> {
  try {
    const userDoc = await getDoc(doc(db, 'users', address));
    if (userDoc.exists()) {
      return userDoc.data() as User;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export async function getUserByUsername(username: string): Promise<User | null> {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data() as User;
    }
    return null;
  } catch (error) {
    console.error('Error fetching user by username:', error);
    return null;
  }
}

export async function getAllUsers(): Promise<User[]> {
  try {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    
    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      address: doc.id
    })) as User[];
  } catch (error) {
    console.error('Error fetching all users:', error);
    return [];
  }
}

export async function createUser(address: string, userData: User): Promise<void> {
  try {
    await setDoc(doc(db, 'users', address), userData);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export async function updateUser(address: string, userData: Partial<User>): Promise<void> {
  try {
    if (userData.username) {
      const existingUser = await getUserByUsername(userData.username);
      if (existingUser && existingUser.address !== address) {
        throw new Error('Username already taken');
      }
    }
    
    await updateDoc(doc(db, 'users', address), userData);
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}