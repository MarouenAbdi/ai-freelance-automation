import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Calendar, Clock } from "lucide-react";
import { AnimatePresence } from "framer-motion";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  category: string;
  content: string;
  coverImage?: string;
}

export function BlogModal({ isOpen, onClose, title, date, category, content }: BlogModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[800px] p-0 gap-0 flex flex-col h-[90vh] overflow-hidden" data-dialog-content>
            <DialogHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm p-6 pb-3 border-b flex-shrink-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {date}
                    </div>
                  </div>
                  <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
                </div>
                <DialogClose asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </DialogClose>
              </div>
            </DialogHeader>
            
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full w-full">
                <div className="p-6 pt-4">
                  <div 
                    className="prose prose-slate dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </ScrollArea>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}